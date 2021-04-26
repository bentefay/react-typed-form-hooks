---
layout: default
parent: Reference
---

# `<ChildForm />`

Use the `ChildForm` component if you want to make fields inside an object field available to inputs. This is a wrapper around [`useChildForm`](/typed-react-form/reference/useChildForm).

## Props

#### `form` (required)

The parent form which contains the object field to create a child form for.

#### `name` (required)

The name of the field in the parent form to create

#### `render` (required)

A function that renders, and creates inputs for the child form, which is passed as a parameter.

## Advanced

You can also use this component on array fields (index as name), but [`ArrayForm`](/typed-react-form/reference/ArrayForm) or [`useArrayForm`](/typed-react-form/reference/useArrayForm) is preferred when you want to create [dynamic array fields](/typed-react-form/advanced/Array-fields). It provides useful array manipulation functions and optimizations.

This component does not render its content when the form is empty (happens when its parent field has been assigned `null`, `undefined` or `{}`).