import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Nomination } from '../shared/models/nomination';

@Component({
  selector: 'app-nomination-creator',
  templateUrl: './nomination-creator.component.html',
  styleUrls: ['./nomination-creator.component.scss']
})
export class NominationCreatorComponent implements OnInit {
  @ViewChild('nomPlayerUsername') playerUsername: ElementRef;
  @ViewChild('nomPlayerRank') playerRank: ElementRef;
  @ViewChild('nomNominatorUsername') nominatorUsername: ElementRef;
  @ViewChild('nomNominatorRank') nominatorRank: ElementRef;
  @ViewChild('nomNominateFor') nominateFor: ElementRef;
  @ViewChild('nomNominationInfo') nominationInfo: ElementRef;

  // tslint:disable-next-line: no-output-rename
  @Output('catchCreatedNomination')
  public emitNewNomination: EventEmitter<Nomination>;

  constructor() {
    this.emitNewNomination = new EventEmitter<Nomination>();
  }

  ngOnInit(): void {
  }

  onNominate() {
    const playerUsername = (this.playerUsername.nativeElement as HTMLInputElement).value;
    const playerRank = (this.playerRank.nativeElement as HTMLInputElement).value;
    const nominatorUsername = (this.nominatorUsername.nativeElement as HTMLInputElement).value;
    const nominatorRank = (this.nominatorRank.nativeElement as HTMLInputElement).value;
    const nominateFor = (this.playerUsername.nativeElement as HTMLInputElement).value;
    const nominationInfo = (this.nominationInfo.nativeElement as HTMLInputElement).value;

    const newNomination = {
      nominatedPlayer: playerUsername,
      nominatedPlayerRank: playerRank,
      nominator: nominatorUsername,
      nominatorRank: nominatorRank,
      nominatedFor: nominateFor,
      reason: nominationInfo
    };

    this.emitNewNomination.emit(newNomination);
  }
}
