
//???Scanner로 글자를 받은 후 10글자 이하면 입력한 글자를 찍고 이상이면 출력할수없습니다.

import java.util.Scanner;

public class Practice_self2 {
	public static void main(String[] args) throws Exception{
	
Scanner sc = new Scanner(System.in);
		
		System.out.println("글자를 입력하세요.");
		String a = sc.next();
		int i = a.length();
		System.out.println("당신이 입력한 글자 수는 모두" + i+ "자 입니다.");
		
		if (i <=10) {
			System.out.println("입력한 글자: "+a);
		
		}else {
				System.out.println("출력할 수 없습니다.");
			}
		}
	
	}

