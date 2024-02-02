# ngx-extended-pdf-viewer-FormattedText
 Test for formatted Text

On the left is a will show the field answers as you type them in.

**Steps:**
1. Click on Normal Field
1. type in "ABCD"
   1. notice on right you see
   1. ```{"Normal TextFie1d" : "ABCD"}```
1. now click ANYWHERE and the values all disappear.

CAUSE:
In the blur listener we are listening for the event updatefromsandbox.

The actions has a ```formattedValue(event)``` that is calling ```window.updateAngularFormValue``` with the second parameter as an object that should be value, but it contains only formattedValue.

Tn UpdateAngularFormValue the [has a prototype of](https://github.com/stephanrauh/ngx-extended-pdf-viewer/blob/a196c6393fdee51abf6349b3688cbdf1aae78600/projects/ngx-extended-pdf-viewer/src/lib/ngx-form-support.ts#L28): 
```(key: string | HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement, value: { value: string })```
But the object being sent has only formattedvalue field with NO value field causing the data to be cleared out.
.
