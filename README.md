
# Article 1: What Is Type Inference in TypeScript? And Why Is It Helpful?

In TypeScript, it is not always necessary to manually write the type of every variable. This is possible because of a smart feature called **type inference**.

TypeScript can often guess the type based on the value that is assigned. This makes coding smoother while still keeping the safety that comes with strong typing.

---

### What Is Type Inference?

**Type inference** means that TypeScript figures out the type of a variable or expression on its own.

Example:

```ts
let country = "Bangladesh";
```

Even though `: string` was not written, TypeScript understands that `country` is a string. The type is inferred from the assigned value.

Another example:

```ts
function multiply(a: number, b: number) {
  return a * b;
}
```

Here, the return type is not written, but TypeScript understands that the result is a number, because both `a` and `b` are numbers.

---

### Why Is Type Inference Helpful?

#### Less Manual Typing

There is no need to write types for every single variable. This makes the code cleaner and faster to write.

#### Early Error Detection

Even without writing types manually, TypeScript can still show errors if the value does not match the inferred type.

```ts
let score = 90;
score = "high"; // It should show an error like: Type 'string' is not assignable to type 'number'
```

#### Smarter Code Suggestions

With inferred types, modern code editors like VS Code can provide better auto-completion and helpful hints.

#### Smooth Transition from JavaScript

For those coming from a JavaScript background, type inference makes it easier to start using TypeScript without needing to declare everything strictly from the beginning.

---

### When to Write Types Manually?

Even though type inference is helpful, there are cases where writing the type manually is better:

* When the variable holds a complex structure like objects or arrays
* When the expected type is not clear from the value
* When the code needs to be easier for others to understand
* When creating public functions or APIs

Example:

```ts
let product: { name: string; price: number } = {
  name: "Shoe",
  price: 1200
};
```

Writing the type clearly shows what the object should look like.

---

### Final Thoughts

Type inference is a built-in helper that allows TypeScript to guess types intelligently. It reduces the need for extra typing while still protecting the code from unexpected issues. This feature keeps code simple and safe.

Type inference is especially useful in everyday development where clean and maintainable code is important.

---

# Article 2: Understanding Union and Intersection Types in TypeScript (With Examples)

In TypeScript, union and intersection types are powerful tools for handling different kinds of data. These types help make code more flexible while keeping it safe and well-structured.

Let us explore what they are and how they work with some easy-to-understand examples.

---

### What Is a Union Type?

A **union type** allows a variable to hold more than one type of value. It means the variable can be **either** one type **or** another.

Example:

```ts
let value: string | number;

value = "Hello";
value = 42;
```

In this example, the variable `value` can be either a string or a number. This is useful when a value might come in different forms.

Union types are also helpful in function parameters:

```ts
function displayStatus(status: "success" | "error" | "loading") {
  console.log("Current status:", status);
}

displayStatus("success");
```

Here, the function accepts only one of the three allowed string values.

---

### What Is an Intersection Type?

An **intersection type** combines multiple types into one. This means the resulting type must include **all properties** from the combined types.

Example:

```ts
type Employee = {
  name: string;
  id: number;
};

type Department = {
  departmentName: string;
};

type FullEmployee = Employee & Department;

const staffMember: FullEmployee = {
  name: "Nadia",
  id: 101,
  departmentName: "Finance"
};
```

In this case, the object `staffMember` includes all properties from both `Employee` and `Department`. The `FullEmployee` type ensures that nothing is missing.

---

### When to Use Union vs Intersection

* **Union types** are useful when a value can be one of several types.
* **Intersection types** are useful when a value must include features from multiple types.

---

### Conclusion

Union and intersection types improve the way TypeScript handles different types of data. By using them, developers can create more accurate and predictable code structures. These tools are especially helpful when building large, scalable applications where clarity and safety are important.
