package com.test.project.entity;

import jakarta.persistence.*;
import lombok.Data;

@Table(name = "eventVolunteers")
@Data
@Entity
public class EventVolunteer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "eventId")
    private Event event;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;

    @Column(name = "roleDescription")
    private String roleDescription;
}
