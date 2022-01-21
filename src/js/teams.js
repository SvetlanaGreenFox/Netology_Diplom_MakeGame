import { Swordsman } from "./Characters/Swordsman";
import { Bowman } from "./Characters/Bowman";
import { Magician } from "./Characters/Magician";
import { Daemon } from "./Characters/Daemon";
import { Undead } from "./Characters/Undead";
import { Vampire } from "./Characters/Vampire";

export const player = [new Swordsman(), new Bowman(), new Magician()];
export const enemy = [new Daemon(), new Undead(), new Vampire()];
