package Week1.Week1_DataStructuresandAlgorithms_HandsOn._2_FinancialForecasting;

import java.util.Scanner;

public class value {
    public static double forecastValue(double presentValue, double growthRate, int years) {
        if (years == 0) {
            return presentValue; // Base case
        } else {
            return forecastValue(presentValue, growthRate, years - 1) * (1 + growthRate);
        }
    }
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Present Value: ");
        double presentValue = scanner.nextDouble();
        System.out.print("Growth Rate: ");
        double growthRate = scanner.nextDouble();
        System.out.print("Enter Number of Years: ");
        int years = scanner.nextInt();
        double futureValue = forecastValue(presentValue, growthRate, years);
        System.out.printf("Future Value: %.2f\n", futureValue);
        scanner.close();
    }
}
