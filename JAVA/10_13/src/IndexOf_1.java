import java.util.Scanner;
public class IndexOf_1 {

	public static void main(String[] args) {

	// TODO Auto-generated method stub

	System.out.println("계산식을 입력하세요.");

	Scanner sc = new Scanner(System.in);

	String scn = sc.next();

	System.out.println("입력값 :"+ scn);

	IndexOf_cal io = new IndexOf_cal();

	int output = io.cal(scn);

	System.out.println("합계 :"+ output);

	}

}
