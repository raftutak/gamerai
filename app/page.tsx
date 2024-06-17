"use client";

import useGameData from "@/hooks/useGameData";
import Chat from "@/components/chat";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const { gameData, isGameActive } = useGameData();

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex flex-1 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="grid items-start gap-6 w-full">
          <Sidebar gameData={gameData} isGameActive={isGameActive} />
          <div className="pl-[250px] mx-auto items-start gap-6 w-full">
            <Card x-chunk="dashboard-04-chunk-1" className="px-3">
              <CardHeader>
                <CardTitle>Porady</CardTitle>
                <CardDescription>
                  Gdy rozpocznie się rozgrywka, tutaj zobaczysz porady.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!isGameActive ? (
                  <div>
                    <strong>Brak aktywnej rozgrywki.</strong>
                  </div>
                ) : (
                  <Chat gameData={gameData} />
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
