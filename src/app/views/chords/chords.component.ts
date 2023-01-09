import { Component, HostListener } from '@angular/core';
import { CHORDS } from './CHORDS';
@Component({
  selector: 'ci-chords',
  templateUrl: './chords.component.html',
  styleUrls: ['./chords.component.scss']
})
export class ChordsComponent {
  CHORDS = CHORDS;
  selectedChords?: any;
  selectedChord?: any;
  private shortcuts: any = {
    '1': () => {
      this.tab(1)
    },
    '2': () => {
      this.tab(2)
    },
    '3': () => {
      this.tab(3)
    },
    '4': () => {
      this.tab(4)
    },
    '5': () => {
      this.tab(5)
    },
    '6': () => {
      this.tab(6)
    },
  }
  @HostListener('window:keypress', ['$event'])
  keydown(event: KeyboardEvent) {
    if (event.key && this.shortcuts[event.key]) this.shortcuts[event.key]();
  }

  tab(string: number) {
    switch (string) {
      case 1:
        this.emitSound(82.40689);
        break;
      case 2:
        this.emitSound(110);
        break;
      case 3:
        this.emitSound(146.8324);
        break;
      case 4:
        this.emitSound(195.9977);
        break;
      case 5:
        this.emitSound(246.9417);
        break;
      case 6:
        this.emitSound(329.6276);
        break;
    }
  }

  emitSound(frequency: number) {
    var context = new AudioContext()
    var o = context.createOscillator()
    var g = context.createGain()
    g.gain.value = 1.1;
    o.frequency.value = frequency;
    o.connect(g)
    g.connect(context.destination)
    o.start(0)
    o.stop(1)
  }

  playChords() {
    const delay = 0;
    setTimeout(() => this.tab(1), delay * 0);
    setTimeout(() => this.tab(2), delay * 1);
    setTimeout(() => this.tab(3), delay * 2);
    setTimeout(() => this.tab(4), delay * 3);
    setTimeout(() => this.tab(5), delay * 4);
    setTimeout(() => this.tab(6), delay * 5);
  }

  getChords(): any {
    return (this.CHORDS as any)[this.selectedChords];
  }
}
