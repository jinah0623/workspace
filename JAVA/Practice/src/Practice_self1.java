import java.util.Scanner;

public class Practice_self1 {
	
	public static void main(String[] args) {	

		Scanner sc = new Scanner(System.in);
		System.out.println("점수를 입력하세요:");
		int score = sc.nextInt();
		
		String grade=""; //string 초기화
		
		if (score >= 100) {
			if(score >=95) { //95~100
				grade = "A+";
		
			}else {			//90~94점
				grade= "A";
			}
		}else {
			if(score>=85) { //85점~89
				grade = "B+";
			}
		else {
			if(score>=80) { //80~84
			grade = "B";
		
		}else {
				grade = "잘못된 값 입니다.";
				}
			}
		System.out.println("당신의 학점은: " +grade);
		}
	}
}
