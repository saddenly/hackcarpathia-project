package com.test.project.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "roles")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int roleId;

    @Column(name = "roleName")
    private String roleName;

    @OneToMany(mappedBy = "roleId")
    private List<User> users;
}
