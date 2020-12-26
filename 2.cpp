#include <iostream>
using namespace std;

int main() {

  int matrikarray [3][5] = {{2,8,14,20,26},{32,38,44,50,56},{62,68,74,80,86}
};
  int a,b;

  cout << "\nIsi Array (3,5)\n";
  for(a=0;a<3;a++){
    for(b=0;b<5;b++){
      cout << matrikarray [a][b]<<" ";
    }
    cout<<endl;
  }

  return 0;
}
