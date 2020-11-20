import java.util.Scanner;

public class Logical_test_if2 {
	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("입력하세요.");
		int score = sc.nextInt();
		
		if(score >= 90) {
			System.out.println("점수가 90점보다 높습니다.");
			System.out.println("A클래스 입니다.");
		}else {
			System.out.println("점수가 90점보다 낮습니다.");
			System.out.println("B클래스 입니다.");
		}
		
	}
}
