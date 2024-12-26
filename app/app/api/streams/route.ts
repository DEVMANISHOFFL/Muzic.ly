import { prismaClient } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import youtubesearchapi from "youtube-search-api";
import {
    GetListByKeyword,
    GetVideoDetails,
    GetShortVideo,
} from 'youtube-search-api';
import { log } from "console";

var YT_REGEX = /^(?:(?:https?:)?\/\/)?(?:www\.)?(?:m\.)?(?:youtu(?:be)?\.com\/(?:v\/|embed\/|watch(?:\/|\?v=))|youtu\.be\/)((?:\w|-){11})(?:\S+)?$/;

const CreateStreamSchema = z.object({
    creatorId: z.string(),
    url: z.string(),
})

export async function POST(req: NextRequest) {
    try {
        const data = CreateStreamSchema.parse(await req.json());
        const isYt = data.url.match(YT_REGEX);
        if (!isYt) {
            return NextResponse.json({
                message: "Wrong url format"
            }, {
                status: 411
            })
        }

        const extractedId = data.url.split("?v=")[1];

        const res = await youtubesearchapi.GetVideoDetails(extractedId);
        
        // Accessing the thumbnails
        const thumbnails = res.thumbnail.thumbnails;
        thumbnails.sort((a, b) => (a.width ?? 0) - (b.width ?? 0));
        
        const smallestThumbnail = thumbnails[0];
        const largestThumbnail = thumbnails[thumbnails.length - 1];

        console.log("Smallest Thumbnail:", smallestThumbnail.url);
        console.log("Largest Thumbnail:", largestThumbnail.url);

        const backupImg = "data:image/png;base64,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"
        
        const stream = await prismaClient.stream.create({
          data: {
            userId: data.creatorId,
            url: data.url,
            extractedId,
            type: "Youtube",
            title: res.title ?? "unloaded",
            bigImg: largestThumbnail.url ?? backupImg, 
            smallImg: smallestThumbnail.url ?? backupImg 
          }
        });
        

        return NextResponse.json({
            message: "Added stream",
            id: stream.id
        })

    } catch {
        return NextResponse.json({
            message: "Error while adding a stream"
        }, {
            status: 411
        })
    }


}