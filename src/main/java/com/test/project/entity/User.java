package com.test.project.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "users")
public class User {

    public static final PasswordEncoder PASSWORD_ENCODER = new BCryptPasswordEncoder();

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "email")
    private String email;

    @ManyToOne
    @JoinColumn(name = "roleId")
    private Role roleId;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private Set<EventParticipant> eventsParticipated;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private Set<EventVolunteer> eventsVolunteered;

    @ManyToMany(mappedBy = "organizers")
    private Set<Event> organizedEvents;

    public void setPassword(String password) {
        this.password = PASSWORD_ENCODER.encode(password);
    }
}
