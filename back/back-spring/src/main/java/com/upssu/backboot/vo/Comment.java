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
public class Comment {
	private int id;
	private String title;
	private String content;
	private String score;
	private User writer;
	private LocalDateTime createdAt;
	
}
