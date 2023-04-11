import { Component, OnInit } from '@angular/core';

import { Question } from '../models/question';

@Component({
  selector: 'app-csharp',
  templateUrl: './csharp.component.html',
  styleUrls: ['./csharp.component.scss']
})
export class CsharpComponent implements OnInit {
  data: Question[] | undefined;

  constructor() {
    this.data = [
      { title: 'What will happen after the execution of the following code?', answer: 'Infinity will be outputted.', explanation: 'Float and double are not integral types. That is why, if we use checked, overflow does not take place. Though, if we used int, byte, short or long, an expected error would occur. Unchecked will not work with not built-in types as well', code: 
      ' float q = float.MaxValue; \n' +
      ' float w = float.MaxValue; \n' + 
      ' checked \n' +
      '{ \n' +
          ' float a = q * w; \n' +
          ' Console.WriteLine(a.ToString()); ] \n'+
      '} '
      },
      { title: 'What is attribute in C#? What is it used for?', answer: 'Attribute is a powerful feature that plays an important role within the C# ecosystem as it adds metadata information to your assemblies. Attributes are used to convey declarative information or metadata about various code elements such as: Assembly, Class, Method, Delegate, Enum, Event, Field, Interface, Property and Struct.', explanation: 'Ok Yes' },
      { title: 'What is the difference between reflection and dynamic?', answer: 'Reflection can invite both public and private members of an object, whereas dynamic can invite only public members.', explanation: '' },
      { title: 'What are the types of serialization?', answer: 'Serialization is the process of converting an object into a data stream for storing or transmitting the object to memory, database. Its purpose is to save the state of an object so that it can be recreated.', explanation: 'The reverse operation is called deserialization. It provides the ability to transmit data over the network in a cross-platform compatible format and also save it.' }
    ];
  }

  ngOnInit() {
  }

}
