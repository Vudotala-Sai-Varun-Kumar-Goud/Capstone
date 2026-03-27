package com.edutech.eventmanagementsystem.controller;

import com.edutech.eventmanagementsystem.entity.Event;
import com.edutech.eventmanagementsystem.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/client")
@CrossOrigin(origins = "*")
public class ClientController {

    @Autowired
    private EventService eventService;

    @GetMapping("/booking-details/{eventId}")
    public ResponseEntity<Event> getBookingDetails(@PathVariable("eventId") Long eventId) {
        return ResponseEntity.ok(eventService.getEventById(eventId).orElse(null));
    }
}