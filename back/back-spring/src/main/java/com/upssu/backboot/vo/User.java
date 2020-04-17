package com.upssu.backboot.vo;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class User {
	private String id;
	private String password;
	private int age;
	private int gender;    
	private LocalDateTime createdAt;
}
