import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})

export class ProposalListComponent {
  proposal1: Proposal = new Proposal(15, 'Abc Company', 'http://google.com', 'Ruby', 150, 120, 15, 'nick_ror@gmail.com')
  proposal2: Proposal = new Proposal(14, 'Luxoft', 'http://google.com', 'Ruby', 150, 120, 15, 'kacjob@gmail.com')
  proposal3: Proposal = new Proposal(13, 'Sherlock Murlock', 'http://google.com', 'Ruby', 150, 120, 15, 'kebab@gmail.com')
  proposal4: Proposal = new Proposal(12, 'Next Rext', 'http://google.com', 'Ruby', 150, 120, 15, 'shard@gmail.com')

  proposals: Proposal[] = [this.proposal1, this.proposal2, this.proposal3, this.proposal4]
}
