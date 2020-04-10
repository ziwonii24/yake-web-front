package com.upssu.backboot.vo;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Nutrients {
	private int id;
	private String name;
	private String img;
	private String price;
	private String score;
	private String des;
	private List<Comment> comments;
	private List<Category> categories;
}
