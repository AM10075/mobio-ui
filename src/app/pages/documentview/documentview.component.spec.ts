import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentviewComponent } from './documentview.component';

describe('DocumentviewComponent', () => {
  let component: DocumentviewComponent;
  let fixture: ComponentFixture<DocumentviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
