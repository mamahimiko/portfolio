"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioList } from "./portfolioList";
import Image from 'next/image'
import { Button, buttonVariants } from "@/components/ui/button";
import { GitBranch } from "lucide-react";
import Link from 'next/link'

export default function PortfolioCard() {


  return (
   <>
    {portfolioList.map((skill) => (
    <div key={skill.id} className="w-1/3">
    <Card className="h-[460px]  flex-col overflow-hidden bg-yellow-50">
      <CardHeader  className="flex-shrink-0">
        <Image className="w-full h-[200px] object-cover rounded-lg"
        src={`/${skill.imageId}`}
        alt={skill.title}
        width={300}
        height={200}
      />
      <CardTitle>{skill.title}</CardTitle>
      </CardHeader>
      <CardContent  className="flex-1 flex flex-col justify-between">
        <div className="pb-3 line-clamp-3">
        {skill.discription}
        </div>
        <div className="pb-3 line-clamp-3">
        {skill.skills}
        </div>
        <div className="flex justify-start">
        <Link className={buttonVariants({ variant: "outline" })} href={`https://github.com/${skill.githubURL}`}  target="_blank">Github</Link>
        </div>
      </CardContent>
    </Card>
    </div>
  ))}
   </>
   
  );
}