import { ChangeDetectionStrategy, Component, OnDestroy, WritableSignal, signal } from '@angular/core';

interface HeroStat {
  target: number;
  suffix: string;
  label: string;
  display: WritableSignal<string>;
}

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero implements OnDestroy {
  readonly stats: HeroStat[] = [
    { target: 500,  suffix: '+', label: 'Tile Designs',     display: signal('0') },
    { target: 15,   suffix: '+', label: 'Years Experience', display: signal('0') },
    { target: 1000, suffix: '+', label: 'Happy Clients',    display: signal('0') },
  ];

  private readonly _timeouts: ReturnType<typeof setTimeout>[] = [];
  private readonly _intervals: ReturnType<typeof setInterval>[] = [];

  constructor() {
    this.stats.forEach((stat, i) => {
      const t = setTimeout(() => this._countUp(stat), 1000 + i * 220);
      this._timeouts.push(t);
    });
  }

  private _countUp(stat: HeroStat): void {
    const totalFrames = 60;
    let frame = 0;
    const id = setInterval(() => {
      frame++;
      const eased = 1 - Math.pow(1 - frame / totalFrames, 3);
      stat.display.set(
        Math.min(Math.round(stat.target * eased), stat.target).toLocaleString(),
      );
      if (frame >= totalFrames) clearInterval(id);
    }, 1800 / totalFrames);
    this._intervals.push(id);
  }

  ngOnDestroy(): void {
    this._timeouts.forEach(clearTimeout);
    this._intervals.forEach(clearInterval);
  }
}
