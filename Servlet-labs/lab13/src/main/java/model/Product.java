package model;

public class Product {

    private int id;
    private String imgName;
    private String name;
    private int price;

    public Product() {
    }

    public Product(int id, String imgName, String name, int price) {
        this.id = id;
        this.imgName = imgName;
        this.name = name;
        this.price = price;
    }

    public String getImgName() {
        return imgName;
    }

    public void setImgName(String imgName) {
        this.imgName = imgName;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
