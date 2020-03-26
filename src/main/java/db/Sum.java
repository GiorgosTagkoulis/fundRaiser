package db;

public class Sum {
    int sum;

    public Sum(String summation, int sum) {
        this.sum = sum;
    }

    public void setSum(int sum) {
        this.sum = sum;
    }

    public int getSum() {
        return sum;
    }

    @Override
    public String toString() {
        return "Sum{" +
                ", sum=" + sum +
                '}';
    }
}
