import Link from "next/link";

export default function Sidebar({ gameData, isGameActive }) {
  if (!gameData) {
    return (
      <nav
        className="grid gap-4 text-sm text-muted-foreground fixed"
        x-chunk="dashboard-04-chunk-0"
      >
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-xl font-semibold">Informacje o graczu</h1>
        </div>
        <div>
          <strong>Brak aktywnej rozgrywki.</strong>
        </div>
      </nav>
    );
  }

  const { activePlayer, allPlayers } = gameData;
  const player = allPlayers.find((p) => p.riotId === activePlayer.riotId);

  return (
    <nav
      className="grid gap-4 text-sm text-muted-foreground fixed"
      x-chunk="dashboard-04-chunk-0"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-2">
        <h1 className="text-xl font-semibold">Informacje o graczu</h1>
      </div>
      <div>
        <strong>Nazwa:</strong> {activePlayer.summonerName}
      </div>
      <div>
        <strong>ID:</strong> {activePlayer.riotId}
      </div>
      <div>
        <strong>Postać:</strong> {player.championName}
      </div>
      <div>
        <strong>Poziom:</strong> {player.level}
      </div>
      <div>
        <strong>Kills:</strong> {player.scores.kills}
      </div>
      <div>
        <strong>Deaths:</strong> {player.scores.deaths}
      </div>
      <div>
        <strong>Assists:</strong> {player.scores.assists}
      </div>
      <div>
        <strong>Creep Score:</strong> {player.scores.creepScore}
      </div>
      <div>
        <strong>Gold:</strong> {activePlayer.currentGold.toFixed(2)}
      </div>
      <div>
        <strong>Health:</strong> {activePlayer.championStats.currentHealth}/
        {activePlayer.championStats.maxHealth}
      </div>
      <div>
        <strong>Mana:</strong> {activePlayer.championStats.resourceValue}/
        {activePlayer.championStats.resourceMax}
      </div>
    </nav>
  );
}
