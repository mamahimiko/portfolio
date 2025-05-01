"use client";
import { FaPen } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SkillCard() {
    return (
      <Card className="bg-yellow-50 w-full max-w-[500px]">
        <CardHeader>
          <CardTitle className="flex justify-center">My Experiences</CardTitle>
        </CardHeader>
        <CardContent>
        <div className="flex justify-center gap-8">
          <div className="w-1/2 pb-5">
            <ul>
              <li className="flex items-center gap-2"><FaPen /> HTML</li>
              <li className="flex items-center gap-2"><FaPen /> CSS</li>
              <li className="flex items-center gap-2"><FaPen /> JavaScript</li>
              <li className="flex items-center gap-2"><FaPen /> Git</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="flex items-center gap-2"><FaPen /> ReactJs</li>
              <li className="flex items-center gap-2"><FaPen /> Next.js</li>
              <li className="flex items-center gap-2"><FaPen /> Tailwind CSS</li>
            </ul>
          </div>
        </div>
      </CardContent>
      </Card>
    );
  }