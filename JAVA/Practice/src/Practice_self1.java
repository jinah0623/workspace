import java.util.Scanner;

public class Practice_self1 {
	
	public static void main(String[] args) {	

		Scanner sc = new Scanner(System.in);
		System.out.println("������ �Է��ϼ���:");
		int score = sc.nextInt();
		
		String grade=""; //string �ʱ�ȭ
		
		if (score >= 100) {
			if(score >=95) { //95~100
				grade = "A+";
		
			}else {			//90~94��
				grade= "A";
			}
		}else {
			if(score>=85) { //85��~89
				grade = "B+";
			}
		else {
			if(score>=80) { //80~84
			grade = "B";
		
		}else {
				grade = "�߸��� �� �Դϴ�.";
				}
			}
		System.out.println("����� ������: " +grade);
		}
	}
}
