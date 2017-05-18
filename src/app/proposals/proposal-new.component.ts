import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Proposal } from './proposal';
import { ProposalService } from './proposal.service';

@Component({
  selector: 'proposal-new',
  templateUrl: 'proposal-new.component.html',
  styleUrls: ['proposal-new.component.css'],
  providers: [ ProposalService ]
})

export class ProposalNewComponent {
  proposal: Proposal = new Proposal;
  submitted: boolean = false;

  constructor(
    private proposalService: ProposalService
  ) {}

  createProposal(proposal: Proposal) {
    this.proposalService.createProposal(proposal)
        .subscribe(
          data => { return true },
          error => {
            console.log("Error saving proposal");
            return Observable.throw(error);
          }
        )
    this.submitted = true;
  }
}
