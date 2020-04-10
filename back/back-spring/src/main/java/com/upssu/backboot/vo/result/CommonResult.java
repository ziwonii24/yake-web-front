package com.upssu.backboot.vo.result;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CommonResult {
	private boolean isSucccess;
	private int resultCode;
	private String msg;
}
