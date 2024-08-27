"use client";

import {useFormState, useFormStatus} from "react-dom";
import {criarPost} from "../_servicos/posts-servicos";
import {useRef} from "react";

function CriarPostBotao() {
  const {pending} = useFormStatus();

  return (
    <button className="btn btn-primary" disabled={pending}>
      {pending ? "Criando..." : "Criar"}
    </button>
  );
}

export default function CriarPostModal() {
  const formRef = useRef();
  const [state, formAction] = useFormState(
    async (_, formData) => {
      const result = await criarPost({
        titulo: formData.get("titulo"),
        slug: formData.get("slug"),
        conteudo: formData.get("conteudo"),
      });

      if (result?.data) {
        formRef.current.reset();
      }

      return result;
    },
    {data: null, erros: []}
  );

  return (
    <>
      <label
        htmlFor="criar-post-modal"
        className="btn btn-primary btn-sm mt-1.5"
        role="button"
      >
        Criar Post
      </label>
      <input type="checkbox" id="criar-post-modal" className="modal-toggle" />
      <dialog className="modal">
        <div className="modal-box border border-solid border-zinc-50/[0.12]">
          <h3 className="font-bold text-lg">Criar Post</h3>

          <form action={formAction} ref={formRef}>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Título</span>
              </div>
              <input
                type="text"
                name="titulo"
                className="input input-bordered w-full"
                required
              />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Slug</span>
              </div>
              <input
                type="text"
                name="slug"
                className="input input-bordered w-full"
                required
              />
            </label>

            <label className="form-control">
              <div className="label">
                <span className="label-text">Conteúdo</span>
              </div>
              <textarea
                name="conteudo"
                className="textarea textarea-bordered h-48"
                required
              ></textarea>
            </label>

            {state.erros?.length > 0 && (
              <div role="alert" className="alert alert-error mt-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  {state.erros.map((erro) => (
                    <div key={erro}>{erro}</div>
                  ))}
                </span>
              </div>
            )}

            {state.data && (
              <div role="alert" className="alert alert-success mt-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Post criado com sucesso</span>
              </div>
            )}

            <div className="modal-action">
              <CriarPostBotao />
              <label htmlFor="criar-post-modal" className="btn">
                Fechar
              </label>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

