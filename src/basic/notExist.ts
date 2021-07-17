export default function notExistSample() {
  let name = null
  console.log("notExistsample 1:", typeof name, name)

  if (!name) {
    console.log("notExistsample 2:", "名前はまだ" + name)
  } else {
    console.log("notExistsample 3:", "名前は" + name)
  }

  let age = undefined
  console.log("notExistsample 4:", typeof age, age)

  age = 28
  if (!age) {
    console.log("notExistsample 5:", "年齢は秘密です")
  } else {
    console.log("notExistsample 6:", "年齢は" + age + "です")
  }
}
