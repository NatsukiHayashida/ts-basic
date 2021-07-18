//オプションパラメーターを持つ関数
export const isUserSignedIn = (userID: string, username?: string): boolean => {
  if (userID === "ABC") {
    console.log(
      "Function parmeters sample 1: User is signed in! Username is",
      username
    )
    return true
  } else {
    console.log("Function parmeters sample 2: User is not signed in!")
    return false
  }
}

//デフォルトパラメーターを持つ関数
export const isUserSignedIn2 = (
  userID: string,
  username: string = "NO NAME"
): boolean => {
  if (userID === "ABC") {
    console.log(
      "Function parmeters sample 3: User is signed in! Username is",
      username
    )
    return true
  } else {
    console.log("Function parmeters sample 4: User is not signed in!")
    return false
  }
}

//レストパラメータを持つ関数
export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal: number, productPrice: number) => {
    return prevTotal + productPrice
  }, 0)
}
