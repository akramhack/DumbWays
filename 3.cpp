#include <iostream>
using namespace std;

int main()
{
  int n;

  cout << "Cetak Pola: ";
  cin >> n;

  cout << "Pola Segitiga\n";

  for(int i = 1; i <= n; i++){
    for(int j = n; j >= i; j--){
      cout << "*" ;
    }
    cout << endl;
  }
  cin.get();
  return 0;
}
