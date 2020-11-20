
public class Array_account {

	public static void main(String[] args) {

			//int[] scores;

			//scores = new int[] { 75, 80, 90 };

			
			int [] scores = {83, 90,87};

			int sum1 = 0;

			for(int i=0; i<3; i++) {	//배열 0부터 3까지 더하기

				sum1 += scores[i];

			}

			System.out.println(scores);

			System.out.println("총합 : " + sum1);

			Add ad = new Add();
			
			int sum2 = ad;

			// int sum2 = add( new int[] { 75, 80, 90 } );	/ static 안적으면 필요

			System.out.println("총합 : " + sum2);

			System.out.println();

			}

			

	}


