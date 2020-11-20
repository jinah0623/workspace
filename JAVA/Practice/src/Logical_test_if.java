import java.util.Random;

public class Logical_test_if {
	
	public static void main(String[] args) {
		Random rd = new Random();
		//int dice = rd.nextInt(6);
		int dice = (int)(Math.random()*6); //Math.random()은 double형 값 리턴
		//double dice = (int)(Math.random()*6)+1;
		
		System.out.println(dice);
		
		if(dice == 1) {
			System.out.println("주사위가 1이 나왔습니다.");
		}
		else if(dice == 2) {
			System.out.println("주사위가 2이 나왔습니다.");
		}
		else if(dice == 3) {
			System.out.println("주사위가 3이 나왔습니다.");
		}else if(dice == 4) {
				System.out.println("주사위가 4이 나왔습니다.");
		}else if(dice == 5) {
			System.out.println("주사위가 5이 나왔습니다.");
		}else if(dice == 6) {
			System.out.println("주사위가 6이 나왔습니다.");
		}
	}
}
