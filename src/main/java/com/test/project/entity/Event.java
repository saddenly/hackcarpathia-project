package com.test.project.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.Set;

@NoArgsConstructor
@Data
@Entity
@Table(name = "events")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "eventName")
    private String name;

    @Column(name = "eventDescription")
    private String description;

    @Column(name = "eventLocation")
    private String location;

    @Column(name = "startTime")
    @Temporal(TemporalType.TIMESTAMP)
    private Date startTime;

    @Column(name = "endTime")
    @Temporal(TemporalType.TIMESTAMP)
    private Date endTime;

    @ManyToMany
    @JoinTable(
            name = "event_Organizers",
            joinColumns = @JoinColumn(name = "eventId"),
            inverseJoinColumns = @JoinColumn(name = "userId")
    )
    private Set<User> organizers;

    @OneToMany(mappedBy = "event", fetch = FetchType.LAZY)
    private Set<EventParticipant> participants;

    @OneToMany(mappedBy = "event", fetch = FetchType.LAZY)
    private Set<EventVolunteer> volunteers;

    public Event(String name, String description, String location, Date startTime, Date endTime) {
        this.name = name;
        this.description = description;
        this.location = location;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}
