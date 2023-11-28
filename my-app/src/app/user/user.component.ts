import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  constructor(private route : ActivatedRoute) {}

  ngOnInit(): void{
    console.warn("user Id is:"+this.route.snapshot.paramMap.get("id")) // here we get id from route value
  }

}
