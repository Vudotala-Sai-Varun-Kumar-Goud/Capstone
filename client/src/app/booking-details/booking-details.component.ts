// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-booking-details',
//   templateUrl: './booking-details.component.html'
// })
// export class BookingDetailsComponent implements OnInit {
//   itemForm!: FormGroup;

//   constructor(private fb: FormBuilder) { }

//   ngOnInit(): void {
//     this.itemForm = this.fb.group({
//       // Initialization to prevent undefined errors
//     });
//   }
// }


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html'
})
export class BookingDetailsComponent implements OnInit {
  itemForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.itemForm = this.fb.group({});
  }
}
