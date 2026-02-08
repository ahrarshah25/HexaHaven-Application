import React from "react";
import Input from "./Input";
import Button from "./Button";
import Heading from "./Heading";
import Divider from "./Divider";
import SocialIcon from "./SocialIcon";
import Anchor from "./Anchor";
import Href from "./Href";
import LeftLogo from "./LeftLogo";

const Form = ({
  title,
  subtitle,
  inputs,
  buttonText,
  showForgot,
  bottomText,
  bottomLinkText,
  bottomHref,
  func,
}) => {
  return (
    <div className="
    py-8 
      min-h-screen flex items-center justify-center
      bg-white
    ">
      <div className="
        w-full max-w-md
        px-8 py-10
        bg-white
        rounded-2xl
        border border-slate-200
        shadow-xl shadow-slate-900/5
      ">
        <LeftLogo />

        <Heading title={title} subtitle={subtitle} />

        <div className="space-y-4 mt-6">
          {inputs.map((item, i) => (
            <Input key={i} {...item} />
          ))}

          {showForgot && (
            <div className="flex justify-end">
              <Anchor text="Forgot password?" href="/forgot-password" />
            </div>
          )}

          <Button func={func} text={buttonText} />
        </div>

        <Divider />

        <SocialIcon type="google" />

        <div className="mt-6">
          <Href
            text={bottomText}
            linkText={bottomLinkText}
            href={bottomHref}
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
