import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resource-allocate',
  templateUrl: './resource-allocate.component.html'
})
export class ResourceAllocateComponent implements OnInit {
  itemForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      eventId: ['', Validators.required],
      resourceId: ['', Validators.required],
      quantity: ['', Validators.required]
    });
  }
}