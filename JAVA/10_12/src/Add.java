
public class Add {
	public static int add(int[] scores) {		//static 있으면 내부, 없으면 외부

		int sum = 0;

		for(int i=0; i<3; i++) {

			sum += scores[i];

		}

		return sum;

		}


}
