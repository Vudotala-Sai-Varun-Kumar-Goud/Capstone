package com.edutech.eventmanagementsystem.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;

@Entity
public class Allocation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long allocationID;

    @ManyToOne
    @JoinColumn(name = "event_id")
    @JsonIgnore // MUST HAVE THIS TO PREVENT THE SERVER FROM CRASHING
    private Event event;

    @ManyToOne
    @JoinColumn(name = "resource_id")
    private Resource resource;

    private int quantity;

    public Allocation() {}

    public Long getAllocationID() { return allocationID; }
    public void setAllocationID(Long allocationID) { this.allocationID = allocationID; }

    public Event getEvent() { return event; }
    public void setEvent(Event event) { this.event = event; }

    public Resource getResource() { return resource; }
    public void setResource(Resource resource) { this.resource = resource; }

    public int getQuantity() { return quantity; }
    public void setQuantity(int quantity) { this.quantity = quantity; }
}