'use client';

import * as React from 'react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Separator } from '../ui/separator';
import { defineStepper } from '@stepperize/react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetDescription,
} from '../ui/sheet';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
  name: string;
  description: string;
  category: string;
  details: string;
};

const { useStepper, steps } = defineStepper(
  {
    id: 'basicInfo',
    title: 'Basic Info',
    description: 'Enter the basic details of the food item',
  },
  {
    id: 'category',
    title: 'Category',
    description: 'Select the category for the food item',
  },
  {
    id: 'details',
    title: 'Details',
    description: 'Provide additional details',
  },
  {
    id: 'review',
    title: 'Review',
    description: 'Review your information before submission',
  }
);

const CreateMenuSheet: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const stepper = useStepper();
  const form = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    setIsOpen(false);
    // Handle form submission as needed
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">Add Menu</Button>
      </SheetTrigger>
      <SheetContent
        style={{ maxWidth: '50vw' }}
        className="w-full flex flex-col justify-between"
      >
        <div className="flex flex-col flex-start">
          <SheetHeader>
            <SheetTitle>Create Menu</SheetTitle>
            <SheetDescription>
              Here you can add food items for your menu.
            </SheetDescription>
          </SheetHeader>

          <div className="space-y-6">
            <div className="flex justify-between">
              {/* <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                Step {stepper.current.index + 1} of {steps.length}
              </span>
            </div> */}
            </div>

            <nav aria-label="Steps" className="group my-4">
              <ol
                className="flex items-center justify-between gap-2"
                
              >
                {stepper.all.map((step, index, array) => (
                  <React.Fragment key={step.id}>
                    <li className="flex items-center gap-4 flex-shrink-0">
                      <Button
                        type="button"
                        role="tab"
                        variant={
                          index <= stepper.current.index
                            ? 'default'
                            : 'secondary'
                        }
                        aria-current={
                          stepper.current.id === step.id ? 'step' : undefined
                        }
                        aria-posinset={index + 1}
                        aria-setsize={steps.length}
                        aria-selected={stepper.current.id === step.id}
                        className="flex size-10 items-center justify-center rounded-full"
                        onClick={() => stepper.goTo(step.id)}
                      >
                        {index + 1}
                      </Button>
                      <span className="text-sm font-medium">{step.title}</span>
                    </li>
                    {index < array.length - 1 && (
                      <Separator
                        className={`flex-1 ${
                          index < stepper.current.index
                            ? 'bg-primary'
                            : 'bg-muted'
                        }`}
                      />
                    )}
                  </React.Fragment>
                ))}
              </ol>
            </nav>

            <div className="space-y-4">
              {stepper.switch({
                basicInfo: () => <BasicInfoComponent form={form} />,
                category: () => <CategoryComponent form={form} />,
                details: () => <DetailsComponent form={form} />,
                review: () => <ReviewComponent form={form} />,
              })}
              <div className="flex justify-end gap-4"></div>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <Button
            size="lg"
            variant={!stepper.isFirst ? "secondary" : "ghost"}
            onClick={stepper.prev}
            disabled={stepper.isFirst}
          >
            {!stepper.isFirst ? 'Back' : ''}
          </Button>

          {stepper.isLast ? (
            <Button size="lg" onClick={form.handleSubmit(onSubmit)}>
              Complete
            </Button>
          ) : (
            <Button size="lg" onClick={stepper.next}>
              Next
            </Button>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

const BasicInfoComponent: React.FC<{
  form: ReturnType<typeof useForm<FormData>>;
}> = ({ form }) => {
  return (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-medium text-start">
          Name
        </label>
        <Input
          id="name"
          placeholder="Food Item Name"
          {...form.register('name')}
          className="w-full"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="description" className="text-sm font-medium text-start">
          Description
        </label>
        <Textarea
          id="description"
          placeholder="Brief description"
          {...form.register('description')}
          className="w-full"
        />
      </div>
    </div>
  );
};

const CategoryComponent: React.FC<{
  form: ReturnType<typeof useForm<FormData>>;
}> = ({ form }) => {
  return (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <label htmlFor="category" className="text-sm font-medium text-start">
          Select Category
        </label>
        <Input
          id="category"
          placeholder="e.g., Dairy, Fruits"
          {...form.register('category')}
          className="w-full"
        />
      </div>
    </div>
  );
};

const DetailsComponent: React.FC<{
  form: ReturnType<typeof useForm<FormData>>;
}> = ({ form }) => {
  return (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <label htmlFor="details" className="text-sm font-medium text-start">
          Additional Details
        </label>
        <Textarea
          id="details"
          placeholder="Any additional details"
          {...form.register('details')}
          className="w-full"
        />
      </div>
    </div>
  );
};

const ReviewComponent: React.FC<{
  form: ReturnType<typeof useForm<FormData>>;
}> = ({ form }) => {
  const { getValues } = form;
  return (
    <div className="space-y-2">
      <h3 className="text-lg">Review Your Inputs</h3>
      <p>
        <strong>Name:</strong> {getValues('name')}
      </p>
      <p>
        <strong>Description:</strong> {getValues('description')}
      </p>
      <p>
        <strong>Category:</strong> {getValues('category')}
      </p>
      <p>
        <strong>Additional Details:</strong> {getValues('details')}
      </p>
    </div>
  );
};

export default CreateMenuSheet;
