import { Component, OnInit } from '@angular/core';
import { PrivateService } from 'src/app/services/private.service';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {

  public subscriptions:any[] = [];
  constructor(private subscriptionService:SubscriptionService) { }


  ngOnInit(): void {
    this.getAllSubscriptions();
  }

  getAllSubscriptions(){
    this.subscriptionService.getSubscriptions().subscribe((response: any) => {
      this.subscriptions = response.getSubscriptions;
    });
  }

}
