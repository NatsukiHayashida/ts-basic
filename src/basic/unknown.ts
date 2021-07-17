export default function unknownSample() {
  const maybeNumber: unknown = 10

  console.log("unKnownSample 1:", typeof maybeNumber, maybeNumber)

  const isFoo = maybeNumber === "FOO"
  console.log("unKnownSample 2:", typeof isFoo, isFoo)

  // const sum = maybeNumber + 10

  if (typeof maybeNumber === "number") {
    const sum = maybeNumber + 10
    console.log("unKnownSample 3:", typeof sum, sum)
  }
}
