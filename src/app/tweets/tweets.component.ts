import { Component } from '@angular/core';
import { Tweet } from '../interfaces/tweet';

@Component({
  selector: 'app-tweets',
  standalone: true,
  imports: [],
  templateUrl: './tweets.component.html',
  styleUrl: './tweets.component.scss'
})
export class TweetsComponent {
    
  tweets:Tweet[] = [
    {
      tweetID: 1,
      tweet: "Some tweet to test my angular application",
      user: "Bob",
      profilePicture:"https://pbs.twimg.com/profile_images/1780044485541699584/p78MCn3B_x96.jpg"
    },
    {
      tweetID: 2,
      tweet: "Another tweet to test",
      user: "Mary",
      profilePicture:"https://pbs.twimg.com/profile_images/1163798004182257665/0004i_Tw_x96.jpg"
    },
    {
      tweetID: 3,
      tweet: "New Tweet that we added later to the Tweets Array",
      user: "Rob",
      profilePicture:"https://pbs.twimg.com/profile_images/1770513143741009920/MpPRkEzE_x96.png"
    }
   
  ];

  addNewTweet(){
     alert('New Tweet added');
  }

  display(){
     alert('double clicked');
  }

  mousing(){
      alert('mouse over')
  }
}
