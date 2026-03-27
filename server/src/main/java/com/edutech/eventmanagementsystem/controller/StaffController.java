package com.edutech.eventmanagementsystem.controller;

import com.edutech.eventmanagementsystem.entity.Event;
import com.edutech.eventmanagementsystem.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/staff")
@CrossOrigin(origins = "*")
public class StaffController {

    @Autowired
    private EventService eventService;

    @GetMapping("/event-details/{eventId}")
    public ResponseEntity<Event> getEventDetails(@PathVariable("eventId") Long eventId) {
        return ResponseEntity.ok(eventService.getEventById(eventId).orElse(null));
    }

    @PutMapping("/update-setup/{eventId}")
    public ResponseEntity<Event> updateSetup(@PathVariable("eventId") Long eventId, @RequestBody Event event) {
        return ResponseEntity.ok(eventService.updateEvent(eventId, event));
    }
}