interface Game {
    id: number;
    startTime: string;
    awayTeamAbbreviation: string;
    homeTeamAbbreviation: string;
}

interface Player {
    id: number;
    firstName: string;
    lastName: string;
    position: string;
    jerseyNumber: number;
}

interface Team {
    id: number;
    abbreviation: string;
}

interface BattingStats {
    atBats: number;
    runs: number;
    hits: number;
    secondBaseHits: number;
    thirdBaseHits: number;
    homeruns: number;
    earnedRuns: number;
    unearnedRuns: number;
    runsBattedIn: number;
    batterWalks: number;
    batterSwings: number;
    batterStrikes: number;
    batterStrikesFoul: number;
    batterStrikesMiss: number;
    batterStrikesLooking: number;
    batterTagOuts: number;
    batterForceOuts: number;
    batterPutOuts: number;
    batterGroundBalls: number;
    batterFlyBalls: number;
    batterLineDrives: number;
    batter2SeamFastballs: number;
    batter4SeamFastballs: number;
    batterCurveballs: number;
    batterChangeups: number;
    batterCutters: number;
    batterSliders: number;
    batterSinkers: number;
    batterSplitters: number;
    batterStrikeouts: number;
    stolenBases: number;
    caughtBaseSteals: number;
    batterStolenBasePct: number;
    battingAvg: number;
    batterOnBasePct: number;
    batterSluggingPct: number;
    batterOnBasePlusSluggingPct: number;
    batterIntentionalWalks: number;
    hitByPitch: number;
    batterSacrificeBunts: number;
    batterSacrificeFlies: number;
    totalBases: number;
    extraBaseHits: number;
    batterDoublePlays: number;
    batterTriplePlays: number;
    batterGroundOuts: number;
    batterFlyOuts: number;
    batterGroundOutToFlyOutRatio: number;
    pitchesFaced: number;
    plateAppearances: number;
    leftOnBase: number;
}

interface PitchingStats {
    wins: number;
    losses: number;
    earnedRunAvg: number;
    saves: number;
    saveOpportunities: number;
    inningsPitched: number;
    hitsAllowed: number;
    secondBaseHitsAllowed: number;
    thirdBaseHitsAllowed: number;
    runsAllowed: number;
    earnedRunsAllowed: number;
    homerunsAllowed: number;
    pitcherWalks: number;
    pitcherSwings: number;
    pitcherStrikes: number;
    pitcherStrikesFoul: number;
    pitcherStrikesMiss: number;
    pitcherStrikesLooking: number;
    pitcherGroundBalls: number;
    pitcherFlyBalls: number;
    pitcherLineDrives: number;
    pitcher2SeamFastballs: number;
    pitcher4SeamFastballs: number;
    pitcherCurveballs: number;
    pitcherChangeups: number;
    pitcherCutters: number;
    pitcherSliders: number;
    pitcherSinkers: number;
    pitcherSplitters: number;
    pitcherSacrificeBunts: number;
    pitcherSacrificeFlies: number;
    pitcherStrikeouts: number;
    pitchingAvg: number;
    walksAndHitsPerInningPitched: number;
    completedGames: number;
    shutouts: number;
    battersHit: number;
    pitcherIntentionalWalks: number;
    gamesFinished: number;
    holds: number;
    pitcherDoublePlays: number;
    pitcherTriplePlays: number;
    pitcherGroundOuts: number;
    pitcherFlyOuts: number;
    pitcherWildPitches: number;
    balks: number;
    pitcherStolenBasesAllowed: number;
    pitcherCaughtStealing: number;
    pickoffAttempts: number;
    pickoffs: number;
    totalBattersFaced: number;
    pitchesThrown: number;
    winPct: number;
    pitcherGroundOutToFlyOutRatio: number;
    pitcherOnBasePct: number;
    pitcherSluggingPct: number;
    pitcherOnBasePlusSluggingPct: number;
    strikeoutsPer9Innings: number;
    walksAllowedPer9Innings: number;
    hitsAllowedPer9Innings: number;
    strikeoutsToWalksRatio: number;
    pitchesPerInning: number;
    pitcherAtBats: number;
}

interface FieldingStats {
    inningsPlayed: number;
    totalChances: number;
    fielderTagOuts: number;
    fielderForceOuts: number;
    fielderPutOuts: number;
    outsFaced: number;
    assists: number;
    errors: number;
    fielderDoublePlays: number;
    fielderTriplePlays: number;
    fielderStolenBasesAllowed: number;
    fielderCaughtStealing: number;
    fielderStolenBasePct: number;
    passedBalls: number;
    fielderWildPitches: number;
    fieldingPct: number;
    rangeFactor: number;
}

interface MiscellaneousStats {
    gamesStarted: number;
}

interface Stats {
    batting: BattingStats;
    pitching: PitchingStats;
    fielding: FieldingStats;
    miscellaneous: MiscellaneousStats;
}

export interface IPlayerStats {
    game: Game;
    player: Player;
    team: Team;
    stats: Stats;
}export interface IOuts {
    average: number;
    progress: number;
}

