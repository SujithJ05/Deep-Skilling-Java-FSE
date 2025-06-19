import java.util.Scanner;

public class LinearSearch {
    public static Product linearSearch(Product[] products, String targetName) {
        for (int i = 0; i < products.length; i++) {
            if (products[i].productName.equalsIgnoreCase(targetName)) {
                return products[i];
            }
        }
        return null;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Product[] productList = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Book", "Education"),
            new Product(3, "Shoes", "Footwear"),
            new Product(4, "Phone", "Electronics")
        };

        System.out.print("Enter product name to search (Linear Search): ");
        String nameToSearch = scanner.nextLine();

        Product result = linearSearch(productList, nameToSearch);

        if (result != null) {
            System.out.println("Product found:");
            result.display();
        } else {
            System.out.println("Product not found.");
        }

        scanner.close();
    }
}
